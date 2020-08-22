import moment from 'moment';

const DISPLAY_FORMAT = 'dddd, DD-M-YYYY';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const formatDate = (time) => {
  return moment(time).format(DISPLAY_FORMAT).capitalize();
};

export { DISPLAY_FORMAT, formatDate };
