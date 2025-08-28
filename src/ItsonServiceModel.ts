 export type ServiceOptionModel =
    {
        name: string,
        url: string,
    }

export type ItsonServiceModel ={
    nameOption : string,
    serviceOption: ServiceOptionModel[],
}
