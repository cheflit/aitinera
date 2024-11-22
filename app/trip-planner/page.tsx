"use client";

import React, { useState } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({
        destination: '',
        travelDate: '',
        budget: '',
        activities: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div>
            <h1>Travel Preferences Questionnaire</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Destination:</label>
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Travel Date:</label>
                    <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Budget:</label>
                    <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Preferred Activities:</label>
                    <input
                        type="text"
                        name="activities"
                        value={formData.activities}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Page;