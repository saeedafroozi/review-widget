export const genderateStarClass=(starNumber) => {
    let starClass = '';
    switch (Number(starNumber)) {
        case 5:
            starClass = 'success'
            break;
        case 4:
            starClass = 'primary';
            break;
        case 3:
            starClass = 'info';
            break;
        case 2:
            starClass = 'warning';
            break;
        case 1:
            starClass = 'danger';
            break;
        default:
            starClass = 'default';
            break;
    }
    return starClass;
}
