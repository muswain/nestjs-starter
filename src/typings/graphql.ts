
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
    posts?: Nullable<Nullable<Post>[]>;
}

export interface Post {
    id: number;
    title: string;
    votes?: Nullable<number>;
}

export interface IQuery {
    author(id: number): Nullable<Author> | Promise<Nullable<Author>>;
}

type Nullable<T> = T | null;
