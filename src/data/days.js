const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const days = {
    dates: [
        {
            date: new Date("2023-03-25"),
            get weekDay() {
                return weekdays[this.date.getDay()];
            },
            times: [14,15,16,17]
        },
        {
            date: new Date("2023-03-26"),
            get weekDay() {
                return weekdays[this.date.getDay()];
            },
            times: [11,12,15,16,17]
        },
        {
            date: new Date("2023-03-28"),
            get weekDay() {
                return weekdays[this.date.getDay()];
            },
            times: [11,12]
        },
        {
            date: new Date("2023-03-29"),
            get weekDay() {
                return weekdays[this.date.getDay()];
            },
            times: [11,12,13,14,15,16,17]
        },
        {
            date: new Date("2023-03-30"),
            get weekDay() {
                return weekdays[this.date.getDay()];
            },
            times: [12,13,15,16]
        },
        {
            date: new Date("2023-04-03"),
            get weekDay() {
                return weekdays[this.date.getDay()];
            },
            times: [14,15]
        },
        {
            date: new Date("2023-04-05"),
            get weekDay() {
                return weekdays[this.date.getDay()];
            },
            times: [14]
        },
        {
            date: new Date("2023-04-06"),
            get weekDay() {
                return weekdays[this.date.getDay()];
            },
            times: [11,12,13,14,15,16,17]
        },
        {
            date: new Date("2023-04-07"),
            get weekDay() {
                return weekdays[this.date.getDay()];
            },
            times: [11,17]
        },
        {
            date: new Date("2023-04-08"),
            get weekDay() {
                return weekdays[this.date.getDay()];
            },
            times: [13,14,17]
        },
    ]
};