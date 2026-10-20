// ===== Exercitiul 1: citire si prelucrare =====

export const getOrase = (list) => list.map((d) => d.oras)

export const getNevizitate = (list) => list.filter((d) => !d.vizitat)

export const totalZile = (list) => list.reduce((total, d) => total + d.zile, 0)

export const formatDestinatie = ({ oras, tara, zile, vizitat }) =>
  `${vizitat ? '[x]' : '[ ]'} ${oras}, ${tara} (${zile} zile)`

export const numarPeTara = (list) =>
  list.reduce((acc, { tara }) => ({ ...acc, [tara]: (acc[tara] ?? 0) + 1 }), {})

// sort modifica lista pe care e aplicat, deci sortam o copie
export const sortDupaZile = (list) => [...list].sort((a, b) => b.zile - a.zile)

// ===== Exercitiul 2: modificare fara a strica lista initiala =====

export const marcheazaVizitat = (list, id) =>
  list.map((d) => (d.id === id ? { ...d, vizitat: !d.vizitat } : d))

export const adaugaDestinatie = (list, d) => [...list, d]

export const stergeDestinatie = (list, id) => list.filter((d) => d.id !== id)
