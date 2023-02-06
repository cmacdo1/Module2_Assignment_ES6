// Requirement 1: Create JavaScript Objects
var customer1 = {
    id: 1,
    customerName: 'John Doe',
    phoneNumber: '480-123-4567',
    address: '123 W Main St. Mesa, AZ. 85284',
    loanAmount: '',
    interest: .06, // 6%
    loanTermYears: 48, // listed in months // 4 years
    loanType: 'Auto',
    description: '$250 monthly payments',
    calculatedLoanAmount: function calculate(){
        return (250 * ((1 - (1 / (1 + this.interest) ** this.loanTermYears)) / this.interest)).toFixed(2);
    }
}

var customer2 = {
    id: 2,
    customerName: 'Jane Doe',
    phoneNumber: '480-555-5555',
    address: '162 E Price Rd. Phoenix, AZ. 85045',
    loanAmount: '',
    interest: .08, // 8%
    loanTermYears: 24, // listed in months // 2 years
    loanType: 'Auto',
    description: '$3250 monthly payments',
    calculatedLoanAmount: function calculate(){
        return (350 * ((1 - (1 / (1 + this.interest) ** this.loanTermYears)) / this.interest)).toFixed(2);
    }
}

var customer3 = {
    id: 3,
    customerName: 'Andy Biggs',
    phoneNumber: '602-223-0552',
    address: '541 N McClintock Way, Chandler, AZ. 84216',
    loanAmount: '',
    interest: .03, // 3%
    loanTermYears: 96, // listed in months // 8 years
    loanType: 'Home Mortgage',
    description: '$1000 monthly payments',
    calculatedLoanAmount: function calculate(){
        return (1000 * ((1 - (1 / (1 + this.interest) ** this.loanTermYears)) / this.interest)).toFixed(2);
    }
}

var customer4 = {
    id: 4,
    customerName: 'Anna Bell',
    phoneNumber: '602-554-9703',
    address: '635 W Appleway Blvd. Flagstaff, AZ. 81034',
    loanAmount: '',
    interest: .10, // 10%
    loanTermYears: 12, // listed in months // 1 years
    loanType: 'Auto',
    description: '$500 monthly payments',
    calculatedLoanAmount: function calculate(){
        return (500 * ((1 - (1 / (1 + this.interest) ** this.loanTermYears)) / this.interest)).toFixed(2);
    }
}

var customer5 = {
    id: 5,
    customerName: 'Lisa Smith',
    phoneNumber: '602-614-5567',
    address: '3784 S Packer Dr. Tucson, AZ. 84139',
    loanAmount: '',
    interest: .05, // 5%
    loanTermYears: 60, // listed in months // 5 years
    loanType: 'Home Mortgage',
    description: '$750 monthly payments',
    calculatedLoanAmount: function calculate(){
        return (750 * ((1 - (1 / (1 + this.interest) ** this.loanTermYears)) / this.interest)).toFixed(2);
    }
}

// Requirement 2: Create an array of loans and add five instances of the above JavaScript objects
var loans = [];

loans.push(customer1, customer2, customer3, customer4, customer5);

// Requirement 3: List all the array elements with the grand total loan amount using console.log statements
loans.forEach((item) => console.log('The amount of the loan for ' + `${item.customerName}` + ' is ' + '$' + item.calculatedLoanAmount()));
console.log(loans);

// I was unable to figure out how to push the calculate loan amount answer into the objects loanAmount property. Any tips or feedback would be appreciated.  Thank you!