export function dateFormat(date: string) {
    const formatedDate = new Intl.DateTimeFormat('pt-BR').format(
        new Date(date)
      )

    return formatedDate
}