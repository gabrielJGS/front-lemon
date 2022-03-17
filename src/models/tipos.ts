const cpf = {
    type: 'string',
    pattern: '^\\d{11}$',
    example: '21554495008',
}

const cnpj = {
    type: 'string',
    pattern: '^\\d{14}$',
    example: '33400689000109',
}

const tiposDeConexao = [{ key: 'monofasico', value: 'Monofásico' }, { key: 'bifasico', value: 'Bifásico' }, { key: 'trifasico', value: 'Trifásico' }]

const classesDeConsumo = [
    { key: 'residencial', value: 'Residencial' },
    { key: 'industrial', value: 'Industrial' },
    { key: 'comercial', value: 'Comercial' },
    { key: 'rural', value: 'Rural' },
    { key: 'poderPublico', value: 'Poder Público' },
]

const modalidadesTarifarias = [{ key: 'azul', value: 'Azul' }, { key: 'branca', value: 'Branca' }, { key: 'verde', value: 'Verde' }, { key: 'convencional', value: 'Convencional' }]

export {
    cpf,
    cnpj,
    tiposDeConexao,
    classesDeConsumo,
    modalidadesTarifarias,
}