    //Help from Nathan and Brandon. 


    const docBody = document.querySelector('body')
    const container = document.createElement('div')
    docBody.appendChild(container)
    container.classList.add('container')

    let heading = document.createElement('div')
    container.appendChild(heading)
    let headingContent = document.createElement('h1')
    headingContent.innerHTML = 'Customer Database'
    heading.appendChild(headingContent)
    const profileContainer = document.createElement('div')
    container.appendChild(profileContainer)
    profileContainer.classList.add('profile-container')

    for (let customer of customers) {
        let profileDiv = document.createElement('div')
        profileDiv.classList.add('profile')
        profileContainer.appendChild(profileDiv)

        //Image
        let customerImage = customer.picture.large
        let imageNode = document.createElement('img')
        imageNode.classList.add('profile-photo')
        imageNode.src = customerImage
        profileDiv.appendChild(imageNode)

        //Name
        let name = customer.name.first + ' ' + customer.name.last
        let customerName = document.createElement('h2')
        customerName.innerText = name
        profileDiv.appendChild(customerName)
        customerName.classList.add('customer-name')

        //Email
        let email = customer.email
        let emailDiv = document.createElement('div')
        emailDiv.innerText = email
        profileDiv.appendChild(emailDiv)
        emailDiv.classList.add('email')

        //Address
        let address = customer.location.street + "\n" + customer.location.city + ', ' + customer.location.state + ' ' + customer.location.postcode
        let addressDiv = document.createElement('div')
        addressDiv.innerText = address
        profileDiv.appendChild(addressDiv)
        addressDiv.classList.add('address')

    }





    // //DATES
    // let dateOfBirth = `DOB: ${moment(customer.dob).format('MMMM Do YYYY')}`
    // let customerSince = `Customer since: ${moment(customer.registered).format('MMMM Do YYYY')}`
    // let dateDiv = document.createElement('div')
    // dateDiv.innerText = dateOfBirth + '\n' + customerSince
    // profileDiv.appendChild(dateDiv)
    // dateDiv.classList.add('dates')

    // }

    //create array, push needed cust values into it


    // function capitalizeFirstLetter(string) {
    //     return string[0].toUpperCase() + string.slice(1)
    // }


    // const customerNames = customers.map(function(customer) {
    //     return capitalizeFirstLetter(customer.name.first) +
    //         ' ' + capitalizeFirstLetter(customer.name.last)
    // })

    // const customerListItems = customerNames.map(function(name) {
    //     const li = document.createElement('li')
    //     li.textContent = name
    //     return li
    // })

    // console.log(customerListItems)

    // const ul = document.createElement('ul')
    // for (const li of customerListItems) {
    //     ul.appendChild(li)
    // }
    // document.querySelector('#customers').appendChild(ul)

    //image
    //name
    //email
    //address
    //date of birth
    //customer registration date card



    //Brian's Help
    // body = document.querySelector('body')
    // for (customer of customers) {
    //     const profile = document.createElement('profile')
    //     const image = document.createElement('img')
    //     const name = document.createElement('p')
    //     const email = document.createElement('p')
    //     const address = document.createElement('p')
    //     const dob = document.createElement('p')
    //     const reg = document.createElement('p')
    //     profile.appendChild(image)
    //     profile.appendChild(name)
    //     profile.appendChild(email)
    //     profile.appendChild(address)
    //     profile.appendChild(dob)
    //     profile.appendChild(reg)
    //     body.appendChild(profile)

    //     src = customer.picture.large
    //     image.src = src

    //     nameString = customer.name.first
    //     name.innerHTML = nameString

    // }

    // for (let cust of customers)


    // function locationInformation =

    // console.log(customers)

    // function customerName(customer) {
    //     const components = [customer.name]
    // }

    // How would I get started on this project?
    // Take this data, loop through it.
    // Take the data and transform it into these DOM Nodes.
    // Take some data and transform that data.
    // Take some data and transform it into some subset of data.

    //First we will need HTML as index.html.
    //

    // customerLoation(customers[0])
    // for (let customer in customers) {
    //     customerLocation(customer0)
    // }
    // }

    // for (customer of customers) {
    //     console.log(customer)
    //     let customers = document.querySelector("#parking-form")

    // }