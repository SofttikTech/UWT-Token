const UnitedWorldToken = artifacts.require('./UnitedWorldToken.sol');
const TokenTimelock = artifacts.require('./TokenTimelock.sol');

module.exports = async function (deployer, network, accounts) {

  /* United World Token */
  const _decimals = 18;
  const _symbol = 'UWT';
  const _name = 'United World Token';
  const _admin = (await web3.eth.getAccounts())[0];                                                     // TODO: Replace me
  // const _admin = "0x247CC4C40b7F539b2Adda2149b92Ae056c316A83";

  const _totalSupply = '100000000';

  await deployer.deploy(UnitedWorldToken, _name, _symbol, _decimals);

  const deployedToken = await UnitedWorldToken.deployed();

  /******************************************* TokenTimeLocks ******************************************/

  const _foundersFund = "0x2708Be99591dF0Dd9De809FdD6d0516836e9eD56";                            // TODO: Replace me: 10 Million & Lock
  const _charityFund = "0xd6ebB9165413d6d53a62bf79bE9e956480B77a5D";                             // TODO: Replace me: 30 Million & Lock
  const _marketingFund = "0x3B5A4972058D92b137d7760536630Ab315Db7D0C";                           // TODO: Replace me: 10 Million mint
  const _companyFund = "0x3646199dc9229f1655D691C79429d07C768B48bA";                             // TODO: Replace me: 10 Million & Lock
  const _developerFund = "0x3B5A4972058D92b137d7760536630Ab315Db7D0C";                           // TODO: Replace me: 10 Million mint
  const _liquidityFund = "0x3B5A4972058D92b137d7760536630Ab315Db7D0C";                           // TODO: Replace me: 10 Million mint



  /************************************         FOUNDER 1            ***********************************************/
  const _releaseTimeFounder1 = (await web3.eth.getBlock('latest')).timestamp + duration.minutes(10);                        // 1 Year Founder Tokens Timelock
  // const _releaseTimeFounder1 = (await web3.eth.getBlock('latest')).timestamp + duration.years(1);                        // 1 Year Founder Tokens Timelock
  const foundersTimelock1 = await deployer.deploy(TokenTimelock, deployedToken.address, _foundersFund, _releaseTimeFounder1);
  await deployedToken.mint(foundersTimelock1.address, ether(_totalSupply * 0.025));


  /************************************         FOUNDER 2         ***********************************************/
  const _releaseTimeFounder2 = (await web3.eth.getBlock('latest')).timestamp + duration.minutes(10);                        // 2 Year Founder Tokens Timelock
  // const _releaseTimeFounder2 = (await web3.eth.getBlock('latest')).timestamp + duration.years(2);                        // 2 Year Founder Tokens Timelock
  const foundersTimelock2 = await deployer.deploy(TokenTimelock, deployedToken.address, _foundersFund, _releaseTimeFounder2);
  await deployedToken.mint(foundersTimelock2.address, ether(_totalSupply * 0.025));


  /************************************         CHARITY1            ***********************************************/
  const _releaseTimeCharityRound1 = (await web3.eth.getBlock('latest')).timestamp + duration.months(3);                        // 3 Months Charity Tokens Timelock Round1
  const charityTimelockRound1 = await deployer.deploy(TokenTimelock, deployedToken.address, _charityFund, _releaseTimeCharityRound1);
  await deployedToken.mint(charityTimelockRound1.address, ether(_totalSupply * 0.1));

  /************************************         CHARITY2            ***********************************************/
  const _releaseTimeCharityRound2 = (await web3.eth.getBlock('latest')).timestamp + duration.years(1) + duration.months(3);                        // 1 Year 3 Months Charity Tokens Timelock Round2
  const charityTimelockRound2 = await deployer.deploy(TokenTimelock, deployedToken.address, _charityFund, _releaseTimeCharityRound2);
  await deployedToken.mint(charityTimelockRound2.address, ether(_totalSupply * 0.1));

  /************************************         CHARITY3           ***********************************************/
  const _releaseTimeCharityRound3 = (await web3.eth.getBlock('latest')).timestamp + duration.years(2) + duration.months(3);                        // 2 Year 3 Months Charity Tokens Timelock Round2
  const charityTimelockRound3 = await deployer.deploy(TokenTimelock, deployedToken.address, _charityFund, _releaseTimeCharityRound3);
  await deployedToken.mint(charityTimelockRound3.address, ether(_totalSupply * 0.1));


  /************************************         MARKETING  1          ***********************************************/

  const _releaseTimeMarketing1 = (await web3.eth.getBlock('latest')).timestamp + duration.minutes(1);                        // 1 Year Reserve Tokens Timelock
  // const _releaseTimeDeveloper1 = (await web3.eth.getBlock('latest')).timestamp + duration.years(1);                        // 1 Year Reserve Tokens Timelock
  const marketingTimelock1 = await deployer.deploy(TokenTimelock, deployedToken.address, _marketingFund, _releaseTimeMarketing1);
  await deployedToken.mint(marketingTimelock1.address, ether(_totalSupply * 0.025));

  /************************************         Marketing 2            ***********************************************/
  const _releaseTimeMarketing2 = (await web3.eth.getBlock('latest')).timestamp + duration.minutes(10);                        // 2 Year Reserve Tokens Timelock
  // const _releaseTimeDeveloper2 = (await web3.eth.getBlock('latest')).timestamp + duration.years(2);                        // 2 Year Reserve Tokens Timelock
  const marketingTimelock2 = await deployer.deploy(TokenTimelock, deployedToken.address, _marketingFund, _releaseTimeMarketing2);
  await deployedToken.mint(marketingTimelock2.address, ether(_totalSupply * 0.025));




  /************************************         COMPANY 1           ***********************************************/
  const _releaseTimeCompany1 = (await web3.eth.getBlock('latest')).timestamp + duration.minutes(10);                        // 1 Year Reserve Tokens Timelock
  // const _releaseTimeCompany1 = (await web3.eth.getBlock('latest')).timestamp + duration.years(1);                        // 1 Year Reserve Tokens Timelock
  const companyTimelock1 = await deployer.deploy(TokenTimelock, deployedToken.address, _companyFund, _releaseTimeCompany1);
  await deployedToken.mint(companyTimelock1.address, ether(_totalSupply * 0.025));


  /************************************         COMPANY  2         ***********************************************/
  const _releaseTimeCompany2 = (await web3.eth.getBlock('latest')).timestamp + duration.minutes(10);                        // 1 Year Reserve Tokens Timelock
  // const _releaseTimeCompany1 = (await web3.eth.getBlock('latest')).timestamp + duration.years(1);                        // 1 Year Reserve Tokens Timelock
  const companyTimelock2 = await deployer.deploy(TokenTimelock, deployedToken.address, _companyFund, _releaseTimeCompany2);
  await deployedToken.mint(companyTimelock2.address, ether(_totalSupply * 0.025));


  /************************************         DEVELOPER 1            ***********************************************/
  const _releaseTimeDeveloper1 = (await web3.eth.getBlock('latest')).timestamp + duration.minutes(1);                        // 1 Year Reserve Tokens Timelock
  // const _releaseTimeDeveloper1 = (await web3.eth.getBlock('latest')).timestamp + duration.years(1);                        // 1 Year Reserve Tokens Timelock
  const developerTimelock1 = await deployer.deploy(TokenTimelock, deployedToken.address, _developerFund, _releaseTimeDeveloper1);
  await deployedToken.mint(developerTimelock1.address, ether(_totalSupply * 0.025));

  /************************************         DEVELOPER2            ***********************************************/
  const _releaseTimeDeveloper2 = (await web3.eth.getBlock('latest')).timestamp + duration.minutes(10);                        // 2 Year Reserve Tokens Timelock
  // const _releaseTimeDeveloper2 = (await web3.eth.getBlock('latest')).timestamp + duration.years(2);                        // 2 Year Reserve Tokens Timelock
  const developerTimelock2 = await deployer.deploy(TokenTimelock, deployedToken.address, _developerFund, _releaseTimeDeveloper2);
  await deployedToken.mint(developerTimelock2.address, ether(_totalSupply * 0.025));

  /************************************         LIQUIDITY            ***********************************************/
  const _releaseTimeLiquidity = (await web3.eth.getBlock('latest')).timestamp + duration.minutes(10);                        // 2 Year Reserve Tokens Timelock
  // const _releaseTimeDeveloper2 = (await web3.eth.getBlock('latest')).timestamp + duration.years(2);                        // 2 Year Reserve Tokens Timelock
  const liquidityTimelock = await deployer.deploy(TokenTimelock, deployedToken.address, _liquidityFund, _releaseTimeLiquidity);
  await deployedToken.mint(liquidityTimelock.address, ether(_totalSupply * 0.05));


  console.log('---------------------------------------------------------------------------------');

  console.log('***************************United World Token Address = ', deployedToken.address);

  console.log('---------------------------------------------------------------------------------');

  console.log('***************************Founder Wallet = ', _foundersFund);
  console.log('***************************Marketing Wallet = ', _marketingFund);
  console.log('***************************Company Wallet = ', _companyFund);
  console.log('***************************Charity Wallet = ', _charityFund);
  console.log('***************************Developer Wallet = ', _developerFund);
  console.log('***************************Liquidity Wallet = ', _liquidityFund);


  console.log('---------------------------------------------------------------------------------');


  console.log('***************************Founders Timelock Address1 = ', foundersTimelock1.address);
  console.log('***************************Founders Timelock Address2 = ', foundersTimelock2.address);

  console.log('***************************Developers Timelock Address1 = ', developerTimelock1.address);
  console.log('***************************Developers Timelock Address2 = ', developerTimelock2.address);

  console.log('***************************Company Timelock Address1 = ', companyTimelock1.address);
  console.log('***************************Company Timelock Address2 = ', companyTimelock2.address);

  console.log('***************************Marketing Timelock Address1 = ', marketingTimelock1.address);
  console.log('***************************Marketing Timelock Address2 = ', marketingTimelock2.address);

  console.log('***************************Liquidity Timelock Address = ', liquidityTimelock.address);

  console.log('***************************Charity Timelock Address1 = ', charityTimelockRound1.address);
  console.log('***************************Charity Timelock Address2 = ', charityTimelockRound2.address);
  console.log('***************************Charity Timelock Address3 = ', charityTimelockRound3.address);
};


const ether = (n) => new web3.utils.BN(web3.utils.toWei(n.toString(), 'ether'));

const duration = {
  seconds: function (val) { return val; },
  minutes: function (val) { return val * this.seconds(60); },
  hours: function (val) { return val * this.minutes(60); },
  days: function (val) { return val * this.hours(24); },
  weeks: function (val) { return val * this.days(7); },
  months: function (val) { return val * this.days(30); },
  years: function (val) { return val * this.days(365); },
};
