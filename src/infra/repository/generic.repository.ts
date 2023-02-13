export interface IGenericRepository<T extends {id: number}> {
    create(t: T): Promise<T>;
    delete(t: T | {id: number }): Promise<void>;
    update(t: T): Promise<T>;
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T>;
}