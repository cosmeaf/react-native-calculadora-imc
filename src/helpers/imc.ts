export type Level = {
    title: string,
    color: string,
    icon: 'down' | 'up',
    imc: number[],
    yourImc?: number
}

export const levels: Level[] = [
  { title: 'Baixo peso', color: '#00bfff', icon: 'down', imc: [0, 18.5] },
  { title: 'Peso normal', color: '#3CB371', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#ffa500', icon: 'down', imc: [25, 29.9] },
  { title: 'Obesidade grau I', color: '#ff6600', icon: 'down', imc: [30.0, 34.9] },
  { title: 'Obesidade grau II', color: '#ff0000', icon: 'down', imc: [35.0, 39.9] },
  { title: 'Obesidade grau III', color: '#8b0000', icon: 'down', imc: [40.0, 99.0] }
];


export const calculeteImc = (height: number, weight: number) => {
    const imc = weight / (height * height);
  
    for (let i in levels) {
      if (imc >= levels[i].imc[0] && (!levels[i].imc[1] || imc < levels[i].imc[1])) {
        levels[i].yourImc = imc;
        return levels[i];
      }
    }
    return null;
  };
  