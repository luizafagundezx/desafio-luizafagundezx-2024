class RecintosZoo {
    constructor() {
      this.recintos = [
        { numero: 1, bioma: 'savana', tamanho: 10, animais: [{ tipo: 'MACACO', quantidade: 3 }] },
        { numero: 2, bioma: 'floresta', tamanho: 5, animais: [] },
        { numero: 3, bioma: 'savana e rio', tamanho: 7, animais: [{ tipo: 'GAZELA', quantidade: 1 }] },
        { numero: 4, bioma: 'rio', tamanho: 8, animais: [] },
        { numero: 5, bioma: 'savana', tamanho: 9, animais: [{ tipo: 'LEAO', quantidade: 1 }] }
      ];
      
      this.animaisInfo = {
        LEAO: { tamanho: 3, bioma: 'savana' },
        LEOPARDO: { tamanho: 2, bioma: 'savana' },
        CROCODILO: { tamanho: 3, bioma: 'rio' },
        MACACO: { tamanho: 1, bioma: 'savana ou floresta' },
        GAZELA: { tamanho: 2, bioma: 'savana' },
        HIPOPOTAMO: { tamanho: 4, bioma: 'savana ou rio' }
      };
    }
  
    analisaRecintos(tipo, quantidade) {
      const animal = this.animaisInfo[tipo];
      
      // Verifica se o tipo de animal é válido
      if (!animal) return { erro: 'Animal inválido' };
      
      // Verifica se a quantidade é válida
      if (quantidade <= 0 || !Number.isInteger(quantidade)) return { erro: 'Quantidade inválida' };
  
      let recintosViaveis = [];
  
      for (let recinto of this.recintos) {
        const { numero, bioma, tamanho, animais } = recinto;
        const animaisExistentes = animais.reduce((acc, a) => acc + a.quantidade, 0);
        const espacoOcupado = animais.reduce((acc, a) => acc + (a.tipo === tipo ? a.quantidade * animal.tamanho : 0), 0);
        const espacoTotal = tamanho;
        const espacoLivre = espacoTotal - espacoOcupado - (animais.length > 0 ? 1 : 0);
        
        if (espacoLivre >= quantidade * animal.tamanho) {
          if (animal.bioma === bioma || (bioma === 'savana e rio' && animal.bioma === 'savana ou rio')) {
            if (tipo === 'MACACO' && animais.length === 0) continue;
            if (tipo === 'HIPOPOTAMO' && bioma !== 'savana e rio') continue;
            if (animais.length > 0 && animais.some(a => a.tipo !== tipo && a.tipo !== 'MACACO')) continue;
            recintosViaveis.push(`Recinto ${numero} (espaço livre: ${espacoLivre} total: ${espacoTotal})`);
          }
        }
      }
  
      return recintosViaveis.length > 0 ? { recintosViaveis: recintosViaveis.sort() } : { erro: 'Não há recinto viável' };
    }
  }
  
  export { RecintosZoo as RecintosZoo };
  
  