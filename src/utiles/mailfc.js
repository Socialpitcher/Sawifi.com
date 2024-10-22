import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const validateForm = (formData) => {
    const requiredFields = ['name', 'address', 'phone', 'email', 'contactTime', 'homeProvider', 'homeBill', 'mobilityProvider', 'mobilityBill', 'homesecurity'];

    for (let field of requiredFields) {
        if (!formData.get(field) || formData.get(field).trim() === '') {
            Swal.fire({
                title: 'Error!',
                text: `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return false;
        }
    }

    const email = formData.get('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            title: 'Error!',
            text: `Please enter a valid email address.`,
            icon: 'error',
            confirmButtonText: 'Ok'
        });
        return false;
    }

    const phone = formData.get('phone');
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        Swal.fire({
            title: 'Error!',
            text: `Please enter a valid phone number (10 digits).`,
            icon: 'error',
            confirmButtonText: 'Ok'
        });
        return false;
    }

    return true;
};

export const handleSubmission = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Validate form data
    if (!validateForm(formData)) return;

    // Log formData for debugging
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    // Create an email data object with formatted bills
    const emailData = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        to_name: 'Team Sawifi',
        message: `
            Address: ${formData.get('address')}
            Phone: ${formData.get('phone')}
            Email: ${formData.get('email')}
            Best Time to Contact: ${formData.get('contactTime')}
            Home Service Provider: ${formData.get('homeProvider')}
            Home Service Bill: $${formData.get('homeBill').replace(/[^0-9]/g, '')} 
            Mobility Service Provider: ${formData.get('mobilityProvider')}
            Mobility Service Bill: $${formData.get('mobilityBill').replace(/[^0-9]/g, '')}
            Home Security: ${formData.get('homesecurity')} 
        `,
    };

    emailjs.send('service_0vnxa88', 'template_pj3oa3r', emailData, '3bLF5DcxVYO6laNxd')
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            Swal.fire({
                title: 'Success!',
                text: `Thank you for your submission`,
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            form.reset();
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
            Swal.fire({
                title: 'Error!',
                text: `Failed to send message. Please try again later.`,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
};
