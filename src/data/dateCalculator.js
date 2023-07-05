export const dateCalculator = (created) => {
    const currentDate = new Date();
    const creationDate = new Date(created * 1000);
    const diff = currentDate - creationDate;
    const mm = Math.floor(diff / 1000 / 60);
    const hh = Math.floor(diff / 1000 / 60 / 60);
    const dd = Math.floor(diff / 1000 / 60 / 60 / 24);
    return {mm, dd, hh};
}