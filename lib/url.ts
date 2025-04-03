import qs from "query-string"

interface UrlQueryParams {
    params: string,
    key: string,
    value: string
}

interface removeUrlQueryParams {
    params: string,
    keysToRemove: string[]
}

export const formUrlQuery = ({ params, key, value }:UrlQueryParams) => {
    const queryString = qs.parse(params);

    queryString[key] = value;

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString
    })
}

export const removeKeysFromUrlQuery = ({ params, keysToRemove }: removeUrlQueryParams) => {
    const queryString = qs.parse(params);

    keysToRemove.forEach((key) => {
        delete queryString[key];
    })

    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString
    },
    { skipNull: true }
    );
}

 export const getTimeStamp = (date: Date): string => {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 },
    ];
  
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
      }
    }
  
    return 'Just now';
  };
  