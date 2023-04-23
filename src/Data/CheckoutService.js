export const CheckoutService = async (customerData, cartData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                orderNumber: Date.now(),
                customerData,
                cartData,
            });
        }, 1500);
    });
};
