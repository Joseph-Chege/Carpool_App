import React from 'react';

function PriceCounter({ booked }) {
    // Access `estimated_cost` directly from the booking object
    const totalPrice = booked.reduce((sum, booking) => sum + (booking.estimated_cost || 0), 0);

    return (
        <div className="p-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold capitalize mb-6 mt-6 text-center dark:text-white">
                Total Cost: ${totalPrice.toFixed(2)}
            </h2>
        </div>
    );
}

export default PriceCounter;
