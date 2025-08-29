export const itsonService : ItsonServiceModel[] = [
    {
        nameOption: "Autoservicio",
        serviceOption:  [
            {name: "horario", url: "/test"},
            {name: "bajas", url: "/test"},
            {name: "reservas", url: "/test"},

        ]
    },
    {
        nameOption: "Reportes",
        serviceOption:  [
            {name: "horario", url: "/test"},
            {name: "bajas", url: "/test"},
            {name: "reservas", url: "/test"},

        ]
    },

]


export type ServiceOptionModel =
    {
        name: string,
        url: string,
    }

export type ItsonServiceModel ={
    nameOption : string,
    serviceOption: ServiceOptionModel[],
}
