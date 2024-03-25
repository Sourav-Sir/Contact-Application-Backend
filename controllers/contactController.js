// controllers/contactController.js

const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createContact = async (req, res) => {
  const { name, phoneNumber, email, organization } = req.body;

  try {
    const newContact = new Contact({
      name,
      phoneNumber,
      email,
      organization
    });

    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, phoneNumber, email, organization } = req.body;

  try {
    let contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ msg: 'Contact not found' });
    }

    contact.name = name;
    contact.phoneNumber = phoneNumber;
    contact.email = email;
    contact.organization = organization;

    await contact.save();

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    let contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ msg: 'Contact not found' });
    }

    await Contact.findByIdAndDelete(id);

    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
