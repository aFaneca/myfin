

"use strict";

var DateUtils = {
    /**
     * Returns in DD/MMM/YYYY format (ex: 03/abr/2020)
     */
    convertUnixTimestampToDateString: (UNIX_timestamp) => {
        const a = new Date(UNIX_timestamp * 1000);
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const monthNumber = a.getMonth() - 1;
        const date = a.getDate();
        const hour = a.getHours();
        const min = a.getMinutes();
        const sec = a.getSeconds();


        const formattedDate = `${date}\/${month}\/${year}`
        return formattedDate;
    },
    /**
     * Returns in MM/DD/YYYY format (ex: 04/03/2020)
     */
    convertUnixTimestampToDateFormat: (UNIX_timestamp) => {
        const a = new Date(UNIX_timestamp * 1000);
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const monthNumber = a.getMonth() - 1;
        const date = a.getDate();
        const hour = a.getHours();
        const min = a.getMinutes();
        const sec = a.getSeconds();


        const formattedDate = `${monthNumber + 2}\/${date}\/${year}`

        return formattedDate;
    },
    /* convertDateToUnixTimestamp: (dateStr) => {
        return moment(dateStr, "DD-MM-YYYY").unix()
    }, */
    convertDateToUnixTimestamp: (dateStr, dateFormat = "DD/MM/YYYY") => {
        return moment(dateStr + " 09:00", dateFormat + " HH:mm").tz('UTC').unix().valueOf()
    }
}
//# sourceURL=js/utils/stringUtils.js

