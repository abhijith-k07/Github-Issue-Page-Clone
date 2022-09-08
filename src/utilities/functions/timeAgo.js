/**
 * 
 * @param pastTime UTC string of a time in past
 */

function timeAgo(pastTime) {
    const DAY = 24 * 60 * 60 * 1000;
    const HOUR = 60 * 60 * 1000;
    const MINUTE = 60 * 1000;
    const SECOND = 1000;
    const timePast = new Date(pastTime).getTime();
    const timeNow = new Date().getTime();
    const duration = timeNow - timePast;
    if (duration < 1000) return 'now';
    else if (duration < MINUTE) return `${Math.ceil(duration / SECOND)} seconds ago`;
    else if (duration < HOUR) return `${Math.ceil(duration / MINUTE)} minute ago`;
    else if (duration < DAY) return `${Math.ceil(duration/ HOUR)} hour ago`;
    else return `${Math.ceil(duration/ DAY)} days ago`;
}

export { timeAgo };