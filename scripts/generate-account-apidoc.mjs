import fs from 'fs';
import path from 'path';

const dir = 'examples/apidoc/RestClientV3';

const privateClient = `const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});`;

const publicClient = 'const client = new RestClientV3();';

function formatValue(v) {
  if (Array.isArray(v)) {
    const items = v.map((x) => formatValue(x)).join(', ');
    return `[${items}]`;
  }
  if (typeof v === 'string') return `'${v}'`;
  return String(v);
}

function formatParams(params) {
  const entries = Object.entries(params).map(
    ([k, v]) => `    ${k}: ${formatValue(v)},`,
  );
  return `{\n${entries.join('\n')}\n  }`;
}

function buildExample({ method, params, isPrivate = true }) {
  const call = params
    ? `client\n  .${method}(${formatParams(params)})`
    : `client\n  .${method}()`;
  return `import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

${isPrivate ? privateClient : publicClient}

${call}
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
`;
}

const examples = [
  {
    file: 'get-reality-orderbook.js',
    method: 'getRealityOrderBook',
    params: { symbol: 'RAAPLUSDT' },
  },
  {
    file: 'get-reality-fills.js',
    method: 'getRealityFills',
    params: { symbol: 'RAAPLUSDT', limit: '100' },
  },
  { file: 'get-account-assets.js', method: 'getBalances', params: null },
  {
    file: 'get-account-funding-assets.js',
    method: 'getFundingAssets',
    params: { coin: 'USDT' },
  },
  {
    file: 'get-account-setting.js',
    method: 'getAccountSettings',
    params: null,
  },
  {
    file: 'set-leverage.js',
    method: 'setLeverage',
    params: { category: 'USDT-FUTURES', symbol: 'BTCUSDT', leverage: '10' },
  },
  {
    file: 'set-holding-mode.js',
    method: 'setHoldMode',
    params: { holdMode: 'one_way_mode' },
  },
  {
    file: 'get-financial-records.js',
    method: 'getFinancialRecords',
    params: { category: 'USDT-FUTURES', coin: 'BGB' },
  },
  { file: 'get-repayable-coins.js', method: 'getRepayableCoins', params: null },
  { file: 'get-payment-coins.js', method: 'getPaymentCoins', params: null },
  {
    file: 'repay.js',
    method: 'submitRepay',
    params: { repayableCoinList: ['USDT'], paymentCoinList: ['ETH'] },
  },
  {
    file: 'get-convert-records.js',
    method: 'getConvertRecords',
    params: { fromCoin: 'BTC', toCoin: 'USDT' },
  },
  {
    file: 'switch-deduct.js',
    method: 'switchDeduct',
    params: { deduct: 'on' },
  },
  {
    file: 'set-up-deposit-account.js',
    method: 'setDepositAccount',
    params: { coin: 'USDT', accountType: 'unified' },
  },
  { file: 'get-deduct-info.js', method: 'getDeductInfo', params: null },
  {
    file: 'get-account-fee-rate.js',
    method: 'getFeeRate',
    params: { category: 'SPOT', symbol: 'BTCUSDT' },
  },
  {
    file: 'switch-account.js',
    method: 'downgradeAccountToClassic',
    params: null,
  },
  {
    file: 'get-switch-status.js',
    method: 'getUnifiedAccountSwitchStatus',
    params: null,
  },
  {
    file: 'get-max-transferable.js',
    method: 'getMaxTransferable',
    params: { coin: 'USDT' },
  },
  {
    file: 'get-oi-limit.js',
    method: 'getOpenInterestLimit',
    params: { category: 'USDT-FUTURES', symbol: 'BTCUSDT' },
  },
  {
    file: 'set-margin.js',
    method: 'setMargin',
    params: {
      category: 'USDT-FUTURES',
      symbol: 'BTCUSDT',
      posSide: 'long',
      operation: 'add',
      amount: '10',
    },
  },
  { file: 'get-account-info.js', method: 'getAccountInfo', params: null },
  { file: 'get-delta-info.js', method: 'getDeltaInfo', params: null },
  {
    file: 'adjust-account-mode.js',
    method: 'adjustAccountMode',
    params: { mode: 'basic' },
  },
  {
    file: 'get-max-withdrawal.js',
    method: 'getMaxWithdrawal',
    params: { coin: 'USDT' },
  },
  {
    file: 'set-collateral-type.js',
    method: 'setCollateralType',
    params: { collateralType: 'mainstream' },
  },
  { file: 'get-collateral-type.js', method: 'getCollateralType', params: null },
  {
    file: 'get-custom-collateral-coins.js',
    method: 'getCustomCollateralCoins',
    params: null,
    isPrivate: false,
  },
  {
    file: 'pre-set-leverage.js',
    method: 'preSetLeverage',
    params: {
      category: 'USDT-FUTURES',
      symbol: 'BTCUSDT',
      marginMode: 'cross',
      leverage: '10',
    },
  },
  {
    file: 'get-all-symbol-fee-rates.js',
    method: 'getAllFeeRates',
    params: { category: 'SPOT' },
  },
  {
    file: 'create-sub-account.js',
    method: 'createSubAccount',
    params: { username: 'xxxx', accountMode: 'unified', note: 'xxx' },
  },
  {
    file: 'freeze-unfreeze-sub-account.js',
    method: 'freezeSubAccount',
    params: { subUid: '1234567890', operation: 'freeze' },
  },
  {
    file: 'get-subaccount-unified-assets.js',
    method: 'getSubUnifiedAssets',
    params: { subUid: '1234567890' },
  },
  {
    file: 'get-sub-account-list.js',
    method: 'getSubAccountList',
    params: { limit: '10' },
  },
  {
    file: 'create-sub-account-api-key.js',
    method: 'createSubAccountApiKey',
    params: {
      subUid: 'xxx',
      note: 'xxx',
      type: 'read_only',
      permissions: ['uta_trade'],
      passphrase: '1234567Aa',
      ips: ['127.0.0.1'],
    },
  },
  {
    file: 'modify-sub-account-api-key.js',
    method: 'updateSubAccountApiKey',
    params: { apiKey: 'xxx', passphrase: '1234567Aa', type: 'read_only' },
  },
  {
    file: 'delete-sub-account-api-key.js',
    method: 'deleteSubAccountApiKey',
    params: { apiKey: 'xxx' },
  },
  {
    file: 'get-sub-account-api-keys.js',
    method: 'getSubAccountApiKeys',
    params: { subUid: '1234567890' },
  },
  {
    file: 'create-agent-sub-account.js',
    method: 'createAgentSubAccount',
    params: { username: 'xxxx', passphrase: '1234567Aa', note: 'xxxx' },
  },
  {
    file: 'get-transferable-coins.js',
    method: 'getTransferableCoins',
    params: { fromType: 'spot', toType: 'p2p' },
  },
  {
    file: 'transfer.js',
    method: 'submitTransfer',
    params: { fromType: 'spot', toType: 'p2p', amount: '0.1', coin: 'BTC' },
  },
  {
    file: 'main-sub-account-transfer.js',
    method: 'subAccountTransfer',
    params: {
      fromType: 'spot',
      toType: 'uta',
      amount: '1000',
      coin: 'USDT',
      fromUserId: '1991021336',
      toUserId: '4746345901',
      clientOid: 'xxxxx',
    },
  },
  {
    file: 'get-the-transfer-records-of-main-sub-account.js',
    method: 'getSubTransferRecords',
    params: { subUid: '1234567890', limit: '10' },
  },
  {
    file: 'sub-main-account-transfer.js',
    method: 'subMasterTransfer',
    params: {
      fromType: 'spot',
      toType: 'uta',
      amount: '1000',
      coin: 'USDT',
      clientOid: 'xxxxx',
    },
  },
  {
    file: 'get-deposit-address.js',
    method: 'getDepositAddress',
    params: { coin: 'usdt' },
  },
  {
    file: 'get-sub-deposit-address.js',
    method: 'getSubDepositAddress',
    params: { subUid: '1234567890', coin: 'usdt' },
  },
  {
    file: 'get-deposit-records.js',
    method: 'getDepositRecords',
    params: { startTime: '1597026383085', endTime: '1597026383185' },
  },
  {
    file: 'get-sub-deposit-records.js',
    method: 'getSubDepositRecords',
    params: {
      subUid: '1234567890',
      startTime: '1597026383085',
      endTime: '1597026383185',
    },
  },
  {
    file: 'withdrawal.js',
    method: 'submitWithdraw',
    params: {
      coin: 'usdt',
      transferType: 'internal_transfer',
      address: '234234242',
      innerToType: 'uid',
      size: '100',
    },
  },
  {
    file: 'get-withdrawal-records.js',
    method: 'getWithdrawRecords',
    params: { startTime: '1597026383085', endTime: '1597026383185' },
  },
  {
    file: 'get-withdraw-address-book.js',
    method: 'getWithdrawAddressBook',
    params: { coin: 'USDT', limit: '10' },
  },
  {
    file: 'cancel-withdrawal.js',
    method: 'cancelWithdrawal',
    params: { orderId: '111111111111' },
  },
];

const oldFiles = [
  'getBalances.js',
  'getFundingAssets.js',
  'getAccountSettings.js',
  'getAccountInfo.js',
  'setLeverage.js',
  'setHoldMode.js',
  'getFinancialRecords.js',
  'getRepayableCoins.js',
  'getPaymentCoins.js',
  'submitRepay.js',
  'getConvertRecords.js',
  'switchDeduct.js',
  'setDepositAccount.js',
  'getDeductInfo.js',
  'getFeeRate.js',
  'downgradeAccountToClassic.js',
  'getUnifiedAccountSwitchStatus.js',
  'getMaxTransferable.js',
  'getOpenInterestLimit.js',
  'setMargin.js',
  'getDeltaInfo.js',
  'adjustAccountMode.js',
  'getMaxWithdrawal.js',
  'setCollateralType.js',
  'getCollateralType.js',
  'getCustomCollateralCoins.js',
  'preSetLeverage.js',
  'getAllFeeRates.js',
  'createSubAccount.js',
  'freezeSubAccount.js',
  'getSubUnifiedAssets.js',
  'getSubAccountList.js',
  'createSubAccountApiKey.js',
  'updateSubAccountApiKey.js',
  'deleteSubAccountApiKey.js',
  'getSubAccountApiKeys.js',
  'getTransferableCoins.js',
  'submitTransfer.js',
  'subAccountTransfer.js',
  'getSubTransferRecords.js',
  'getDepositAddress.js',
  'getSubDepositAddress.js',
  'getDepositRecords.js',
  'getSubDepositRecords.js',
  'submitWithdraw.js',
  'getWithdrawRecords.js',
  'getWithdrawAddressBook.js',
  'cancelWithdrawal.js',
];

for (const f of oldFiles) {
  const p = path.join(dir, f);
  if (fs.existsSync(p)) fs.unlinkSync(p);
}

for (const ex of examples) {
  fs.writeFileSync(path.join(dir, ex.file), buildExample(ex));
}

console.log(`Wrote ${examples.length} account/reality apidoc examples`);
