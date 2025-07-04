"use strict";
const db = require('../../../modals');
const apartmentsDb = db.apartments;


class Apartment {
    async addNewApartment(req, res) {

        const { name, description, price, location, image, capacity, size, features, isAvailable, owner } = req.body;

        if (!name || !description || !price || !location || !image || !capacity || !size || !features || isAvailable === undefined || !owner) {
            return res.status(400).send({ status: false, message: "All fields are required" });
        }

        const newApartment = new apartmentsDb({
            name,
            description,
            price,
            location,
            image,
            capacity,
            size,
            features,
            isAvailable,
            owner
        });

        try {
            const savedApartment = await newApartment.save();
            return res.status(201).send({ status: true, message: "Apartment added successfully", apartment: savedApartment });
        } catch (error) {
            return res.status(500).send({ status: false, message: "Error adding apartment", error: error.message });
        }

    }

    async getAllApartments(req, res) {
        try {
            const apartments = await apartmentsDb.find().populate('owner', 'username email phone profile_image ').exec();
            return res.status(200).send({ status: true, apartments });
        } catch (error) {
            return res.status(500).send({ status: false, message: "Error fetching apartments", error: error.message });
        }
    }
}


module.exports = new Apartment();