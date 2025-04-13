export const formatDate = (dateString: string): string => {
    if (!dateString) {
        return '';
    }
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('vi-VN').format(date);
};