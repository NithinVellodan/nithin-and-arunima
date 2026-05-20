export interface Guest {
  name: string;
  code: string;
  group: 'A' | 'B';
  gender: 'f' | 'm' | 'p'; // f=female, m=male, p=plural/couple
}

export type Language = 'en' | 'ml';

export interface Translation {
  letter: {
    dear: string;
    message: string;
    open: string;
  };
  hero: {
    name: string;
    countdown: string;
    date: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    readMore: string;
  };
  story: {
    title: string;
    content: string;
  };
  program: {
    title: string;
    ceremony: string;
    catering: string;
    firstDance: string;
    party: string;
    snack: string;
    crazyHour: string;
    receptionNote: string;
  };
  place: {
    title: string;
    address: string;
    viewMap: string;
    title2: string;
    address2: string;
    viewMap2: string;
  };
  dressCode: {
    title: string;
    description: string;
    note: string;
  };
  gift: {
    title: string;
    message: string;
    copy: string;
    copied: string;
  };
  rsvp: {
    title: string;
    name: string;
    attendance: string;
    attending: string;
    notAttending: string;
    guests: string;
    dietary: string;
    dietaryPlaceholder: string;
    submit: string;
    thankYou: string;
    thankYouPlural: string;
    thankYouPersonal: string;
    addToCalendar: string;
  };
  faq: {
    title: string;
    questions: Array<{ q: string; a: string }>;
  };
}
