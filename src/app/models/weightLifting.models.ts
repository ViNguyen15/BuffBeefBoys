export interface StatsSection{
    section: Person[];
}

export interface Person {
    name: string;
    lift: Lift[];
}

export interface Lift {
    title: string;
    amount: number;
}

