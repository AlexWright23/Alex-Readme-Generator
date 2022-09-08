// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
  //return `# ${data.title}


  const generateMarkdown = function({title, description, install, usage, contributors, license, user, email}) {
    
    let licensePick = `${license}`;
    let licenseLink = '';
    if (licensePick === 'Mozilla') {
      licensePick = 'MozillaPublicLicense2.0';
      licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
    };
    if (licensePick === 'Apache') {
      licensePick = 'ApacheLicense2.0';
      licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
    };
    if (licensePick === 'MIT') {
      licensePick = 'MITLicense';
      licenseLink = 'https://choosealicense.com/licenses/mit/';
    };
  
  return (`
  
  # ${title}
  ![badge](https://img.shields.io/badge/license-${license}-brightorange)
  
  ## Description of application
  ${description}

  ## How to install application
  ${install}

  ## What this application is used for
  ${usage}

  ## People who have contributed to this application
  ${contributors}

  ## License:
  ${license}
  Permission to use this application is allowed by the ${license} license. ${licenseLink}
 
  ## Created By:
  [GitHub link: ${user}](https://github.com/${user})
    
  ## Email:
  User email: ${email}
  
  `)}

  
  module.exports = generateMarkdown;