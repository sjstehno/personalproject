var awanaCommands = {
    prodUrl: function () {
        this.navigate('https://www.awana.org')
        return this
    },
    createLogin: function (data) {
        this.navigate()
            .maximizeWindow()
            .moveToElement('@login', 10, 10)
            .click('@login')
            .moveToElement('@noAccount', 1, 1)
            .click('@noAccount')
            .pause(1000)
        this
            // email
            .waitForElementVisible('@signUpEmail', 8000)
            .setValue('@signUpEmail', data)
            //first name
            .setValue('@signUpFirstName', "Auto")
            // last name
            .setValue('@signUpLastName', "Test")
            // password
            .setValue('@signUpPW', "Awana1950")
            // confirm password
            .setValue('@confPW', "Awana1950")
            // accept terms checkbox
            .click('@acceptTerms')
            // click submit
            .click('@signUpSubmit')
            // day of birth
            .click('@signUpDOB')
            // month of birth
            .click('@signUpMOB')
            // year of birth
            .click('@signUpYOB')
            // zip
            .setValue('@signUpZip', "60107")
            // country
            .click('@signUpCountry')
            // checkbox
            .click('@over13')
            // submit
            .click('@signUpSubmit2')
        return this
    },
    createLoginNewMem: function (data) {
        this
            // email
            .waitForElementVisible('@signUpEmail', 8000)
            .setValue('@signUpEmail', data)
            //first name
            .setValue('@signUpFirstName', "Auto")
            // last name
            .setValue('@signUpLastName', "Test")
            // password
            .setValue('@signUpPW', "Awana1950")
            // confirm password
            .setValue('@confPW', "Awana1950")
            // accept terms checkbox
            .click('@acceptTerms')
            // click submit
            .click('@signUpSubmit')
            // day of birth
            .click('@signUpDOB')
            // month of birth
            .click('@signUpMOB')
            // year of birth
            .click('@signUpYOB')
            // zip
            .setValue('@signUpZip', "60107")
            // country
            .click('@signUpCountry')
            // checkbox
            .click('@over13')
            // submit
            .click('@signUpSubmit2')
        return this
    },
    awanaFinder: function (data, browser) {
        this
            .prodUrl()
            .maximizeWindow()
            .click('@findAwana')
            .setValue('@input', [data, browser.Keys.ENTER])
            this.verify.visible('@resultsBox', 8000)
            this.expect.element('@noResults').not.to.be.present
            return this
    }
}
module.exports = {
    url: 'https://sarahs-test-awananetwork.pantheonsite.io',
    commands: [awanaCommands],
    elements: {
        // Register for Membership
        shop: {
            selector: '(//li[@id="menu-item-166"])[1]',
            locateStrategy: 'xpath'
        },
        becomeMember: {
            selector: '(//li[@id="menu-item-24220"])[1]',
            locateStrategy: 'xpath'
        },
        startMembership: '[href="/cart/?add-to-cart=2292"]',
        memCheckout: '.wc-proceed-to-checkout',
        // Pre-DocuSign pop-up
        popUpChurchName: '[name="church"]',
        popUpUserName: '[name="name"]',
        popUpEmail: '[name="email"]',
        popUpSubmit: '#sub',
        // DocuSign
        accept: '[for="disclosureAccepted"]',
        continue: '#action-bar-btn-continue',
        finish: '#end-of-document-btn-finish',
        tabBtn: '.tab-button',
        adopt: {
            selector: '//button[text()="Adopt and Sign"]',
            locateStrategy: 'xpath'
        },
        // Create new user login from mem checkout page
        signUp: {
            selector: '(//a[@id="login-signup"])[3]',
            locateStrategy: 'xpath'
        },
        signUpEmail: 'input[data-gigya-placeholder="Email"]',
        signUpFirstName: {
            selector: '//input[@placeholder="First name *"]',
            locateStrategy: 'xpath'
        },
        signUpLastName: 'input[data-gigya-placeholder="Last name"]',
        signUpPW: 'input[data-gigya-placeholder="Password"]',
        confPW: 'input[placeholder="Confirm password *"]',
        acceptTerms: '#gigya-checkbox-123174339137946130',
        signUpSubmit: 'input[value="Submit"]',
        // Create new user login screen 2
        signUpDOB: {
            selector: '//*[@id="gigya-dropdown-48719413444806790"]/option[2]',
            locateStrategy: 'xpath'
        },
        signUpMOB: {
            selector: '(//option[contains(text(),"January")])[1]',
            locateStrategy: 'xpath'
        },
        signUpYOB: {
            selector: '//option[contains(text(),"1920")]',
            locateStrategy: 'xpath'
        },
        signUpZip: '#gigya-textbox-zip',
        signUpCountry: {
            selector: '(//option[contains(text(),"United States")])[1]',
            locateStrategy: 'xpath'
        },
        over13: '#gigya-checkbox-109578863651979800',
        signUpSubmit2: '[value="Submit"]',
        // Membership checkout page
        selectChurch: {
            selector: '(//option[contains(text(),"Church")])[1]',
            locateStrategy: 'xpath'
        },
        churchName: '#church_account_name',
        firstName: '#church_contact_first_name',
        lastName: '#church_contact_last_name',
        email: '#church_contact_email',
        phone: '#church_account_phone',
        physicalStreet: '#physical_street',
        physicalCity: '#physical_city',
        physicalZip: '#physical_zip',
        stateIL: {
            selector: '(//option[@value="IL"])[1]',
            locateStrategy: 'xpath'
        },
        pastor: 'option[value="Pastor / Associate Pastor"]',
        billFirst: '#billing_first_name',
        billLast: '#billing_last_name',
        billAddress: '#billing_address_1',
        billCity: '#billing_city',
        billZip: '#billing_postcode',
        placeOrder: '#place_order',
        orderConf: '.woocommerce-notice',
        // Download Sample- 30 Days Free
        USMinistry: {
            selector: '(//a[contains(text(),"US Ministry")])[1]',
            locateStrategy: 'xpath'
        },
        curriculum: {
            selector: '(//li[@id="menu-item-17089"])[1]',
            locateStrategy: 'xpath'
        },
        getSample: '[href="/30-days-free/"]',
        sampFirstName: '#input_10_17_3',
        sampLastName: '#input_10_17_6',
        sampEmail: '#input_10_2',
        sampPhone: '#input_10_3',
        sampZip: '#input_10_6_5',
        sampChurchName: '#input_10_5',
        sampRole: 'option[value="Children\'s Pastor \/ Director"]',
        sampProgram: '#label_10_11_2',
        toStart: '#input_10_16',
        nextYear: '[value="Within the next year"]',
        sampSubmit: '#gform_submit_button_10',
        sampConf: '.hero-header',
        // Awana Finder
        findAwana: {
            selector: '(//a[@href="/find-awana/"])[1]',
            locateStrategy: 'xpath'
        },
        input: '#ispbxii_2',
        resultsBox: '[title="Show street map"]',
        noResults: '.fl-club-finder-results-box-empty',
        // Find a US Missionary
        more: {
            selector: '(//div[@class="fl-has-submenu-container"])[5]',
            locateStrategy: 'xpath'
        },
        findUSM: {
            selector: '(//li[@id="menu-item-161620"])[1]',
            locateStrategy: 'xpath'
        },
        stateInput: '[name="state"]',
        // States
        stateAL: 'option[value="AL"]',
        stateAK: 'option[value="AK"]',
        stateAZ: 'option[value="AZ"]',
        stateAR: 'option[value="AR"]',
        stateCA: 'option[value="CA"]',
        stateCO: 'option[value="CO"]',
        stateCT: 'option[value="CT"]',
        stateDE: 'option[value="DE"]',
        stateDC: 'option[value="DC"]',
        stateFL: 'option[value="FL"]',
        stateGA: 'option[value="GA"]',
        stateHI: 'option[value="HI"]',
        stateID: 'option[value="ID"]',
        stateIL: 'option[value="IL"]',
        stateIN: 'option[value="IN"]',
        stateIA: 'option[value="IA"]',
        stateKS: 'option[value="KS"]',
        stateKY: 'option[value="KY"]',
        stateLA: 'option[value="LA"]',
        stateME: 'option[value="ME"]',
        stateMD: 'option[value="MD"]',
        stateMA: 'option[value="MA"]',
        stateMI: 'option[value="MI"]',
        stateMN: 'option[value="MN"]',
        stateMS: 'option[value="MS"]',
        stateMO: 'option[value="MO"]',
        stateMT: 'option[value="MT"]',
        stateNE: 'option[value="NE"]',
        stateNV: 'option[value="NV"]',
        stateNH: 'option[value="NH"]',
        stateNJ: 'option[value="NJ"]',
        stateNM: 'option[value="NM"]',
        stateNY: 'option[value="NY"]',
        stateNC: 'option[value="NC"]',
        stateND: 'option[value="ND"]',
        stateOH: 'option[value="OH"]',
        stateOK: 'option[value="OK"]',
        stateOR: 'option[value="OR"]',
        statePA: 'option[value="PA"]',
        stateRI: 'option[value="RI"]',
        stateSC: 'option[value="SC"]',
        stateSD: 'option[value="SD"]',
        stateTN: 'option[value="TN"]',
        stateTX: 'option[value="TX"]',
        stateUT: 'option[value="UT"]',
        stateVT: 'option[value="VT"]',
        stateVA: 'option[value="VA"]',
        stateWV: 'option[value="WV"]',
        stateWI: 'option[value="WI"]',
        stateWY: 'option[value="WY"]',
        boxEmpty: '.fl-us-missionary-finder-results-box-empty',
        countyDouglas: 'option[value="Douglas"]',
        county: {
            selector: '(//select/option[2])[2]',
            locateStrategy: 'xpath'
        },
        boxName: '.fl-us-missionary-finder-results-box-missionary-content-name',
        // Search by keyword
        searchGlass: {
            selector: '(//a[contains(text(),"Search")])[1]',
            locateStrategy: 'xpath'
        },
        searchBar: {
            selector: '(//input[@type="search"])[1]',
            locateStrategy: 'xpath'
        },
        resultText: '#isp_results_search_text',
        // Search leader resources
        leaderResources: {
            selector: '(//li[@id="menu-item-27134"])[1]',
            locateStrategy: 'xpath'
        },
        cubbiesRadio: ('#ld_cubbies'),
        login: '[href="wp-login.php"]',
        noAccount: {
            selector: '(//a[@data-switch-screen="gigya-register-screen"])[1]',
            locateStrategy: 'xpath'

        },
        appleseed: '[href="https://s3.amazonaws.com/awana-wordpress/GeneralResources/AppleSeedResourceBundleESV.zip"]'
    }
}