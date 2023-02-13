import { IGenericRepository } from "../generic.repository";
import fs from 'fs'

export class GenericArquivoRepository<T extends {id: number}> implements IGenericRepository<T> {

    constructor(public fileName: string){ }
    
    async create(t: T): Promise<T> {
        try {
            const objList: T[] = JSON.parse(fs.readFileSync(this.fileName, {encoding: 'utf-8'}));
            t.id = objList[objList.length - 1].id + 1;
            objList.push(t);
            fs.writeFileSync(this.fileName, JSON.stringify(objList));
        } catch (e: any) {
            t.id = 1;
            fs.writeFileSync(this.fileName, JSON.stringify([t]));
        }
        return t;
    }
    
    async delete(t: T | {id: number }): Promise<void> {
        const objList: T[] = JSON.parse(fs.readFileSync(this.fileName, {encoding: 'utf-8'}));
        var index = objList.findIndex( obj => obj.id === Number(t.id));
        if(index === -1) throw Error("Objeto não encontrado na base de dados!");
        
        objList.splice(index, 1);
        fs.writeFileSync(this.fileName, JSON.stringify(objList));
    }
    
    update(t: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    
    async findAll(): Promise<T[]> {
        const objList: T[] = JSON.parse(fs.readFileSync(this.fileName, {encoding: 'utf-8'}));
        return objList;
    }
    
    async findById(id: number): Promise<T> {
        const objList: T[] = JSON.parse(fs.readFileSync(this.fileName, {encoding: 'utf-8'}));
        var index = objList.findIndex( obj => obj.id === Number(id));
        if(index === -1) throw Error("Objeto não encontrado na base de dados!");
        return objList[index];
    }
    
}