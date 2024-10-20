document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Ngăn chặn hành động mặc định của form
        event.preventDefault();

        // Hiển thị thông báo gửi thành công
        alert('Cảm ơn bạn đã gửi phản hồi! Chúng tôi sẽ xem xét ý kiến của bạn.');

        // Gửi form đến Formspree
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Xóa nội dung của các trường trong form
                form.reset();
            } else {
                alert('Đã xảy ra lỗi. Vui lòng thử lại.');
            }
        })
        .catch(error => {
            alert('Đã xảy ra lỗi. Vui lòng thử lại.');
            console.error('Error:', error);
        });
    });
});
