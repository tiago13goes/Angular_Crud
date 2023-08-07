export interface IGenericApi<T> {
    getById(id: number): T | null
    getAll(): T[]
    create(item: T): boolean
    update(item: T): boolean
    delete(id: number): boolean
}
