export default {
    emailTest(val){ 
        if (val) {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(val);
        } else {
            return false;
        }
    },
    textTest(val) { 
        if (val) {
            const cleaned = val.replace(/[^a-zA-Z ]/g, '');
            return cleaned;
        } else {
            return '';
        }
    },
    numberTest(val) { 
        if (val) {
            const cleaned = val.replace(/[^0-9 ]/g, '');
            return cleaned;
        } else {
            return '';
        }
    },
    formatCellNumber(val) {
        const cleaned = val.replace(/\D/g, '');
        const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
        return formatted;
    }
}