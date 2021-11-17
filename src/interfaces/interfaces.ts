export interface NatoDictionary {
    [key: string]: string
}

export interface DataLoaderInterface {
    dataPath: string,
    data: NatoDictionary,
    showOne(letter: string): NatoDictionary,
    showRandom(number: number): NatoDictionary,
    spell(input: string): NatoDictionary[]
}

export interface NatoAppInterface {
    rootEndpoint: string,
    appName: string,
    port: number,
    run(): void
}

export interface NatoConfig {
    appName?: string,
    port?: number,
    dataPath?: string
}
