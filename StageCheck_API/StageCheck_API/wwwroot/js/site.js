const uri = 'api/Internships';
let internships = [];

function getInternships() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayInternships(data))
        .catch(error => console.error('Unable to get internships.', error));
}

function addInternship() {
    const addTitleTextbox = document.getElementById('add-title');
    const addDescriptionTextBox = document.getElementById('add-description');

    const internship = {
        title: addTitleTextbox.value.trim(),
        description: addDescriptionTextBox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(internship)
    })
        .then(response => response.json())
        .then(() => {
            getInternships();
            addTitleTextbox.value = '';
            addDescriptionTextBox.value = '';
        })
        .catch(error => console.error('Unable to add internship.', error));
}

function deleteInternship(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getInternships())
        .catch(error => console.error('Unable to delete internship.', error));
}

function displayEditForm(id) {
    const internship = internships.find(internship => internship.id === id);

    document.getElementById('edit-title').value = internship.title;
    document.getElementById('edit-id').value = internship.id;
    document.getElementById('edit-description').value = internship.description;
    document.getElementById('editForm').style.display = 'block';
}

function updateInternship() {
    const internshipId = document.getElementById('edit-id').value;
    const internship = {
        id: parseInt(internshipId, 10),
        description: document.getElementById('edit-description').value.trim(),
        title: document.getElementById('edit-title').value.trim()
    };

    fetch(`${uri}/${internshipId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(internship)
    })
        .then(() => getInternships())
        .catch(error => console.error('Unable to update internship.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(internshipCount) {
    const name = (internshipCount === 1) ? 'internship' : 'internships';

    document.getElementById('counter').innerText = `${internshipCount} ${name}`;
}

function _displayInternships(data) {
    const tBody = document.getElementById('internships');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(internship => {
        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${internship.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteInternship(${internship.id})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode = document.createTextNode(internship.title);
        td1.appendChild(textNode);

        let td2 = tr.insertCell(1);
        let textNode = document.createTextNode(internship.description);
        td2.appendChild(textNode);

        let td3 = tr.insertCell(2);
        td3.appendChild(editButton);

        let td4 = tr.insertCell(3);
        td4.appendChild(deleteButton);
    });

    internships = data;
}