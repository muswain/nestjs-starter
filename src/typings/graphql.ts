
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Author {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
}

export interface IQuery {
    author(id: number): Nullable<Author> | Promise<Nullable<Author>>;
}

type Nullable<T> = T | null;
