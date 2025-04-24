export const calculatePeriod = (startDate: Date) => {
    const now = new Date();
    const yearsDiff = now.getFullYear() - startDate.getFullYear();
    const monthsDiff = now.getMonth() - startDate.getMonth();
    
    let totalMonths = yearsDiff * 12 + monthsDiff;

    if (totalMonths < 0) {
        return "0 лет 0 месяцев";
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const roundedMonths = months > 0 ? months + 1 : 0;

    let yearLabel = "лет";
    if (years === 1) {
        yearLabel = "год";
    } else if (years >= 2 && years <= 4) {
        yearLabel = "года";
    }

    let monthLabel = "месяцев";
    if (roundedMonths === 1) {
        monthLabel = "месяц";
    } else if (roundedMonths >= 2 && roundedMonths <= 4) {
        monthLabel = "месяца";
    }

    return `${years} ${yearLabel} и ${roundedMonths} ${monthLabel}`;
};

export const startDate = new Date(2024, 2, 12);
