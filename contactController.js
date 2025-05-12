const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address } = req.body;

    const newContact = new Contact({ firstName, lastName, email, phone, address });
    await newContact.save();

    res.status(201).json({ message: 'Contact submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Failed to submit contact form' });
  }
};
