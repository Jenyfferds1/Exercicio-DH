package conta;
public class contaPoupanca extends Conta{
	private Double taxaJuros;
	
	public contaPoupanca() {
		super();
	}
	public contaPoupanca(Double taxaJuros) {
		super();
		this.taxaJuros = taxaJuros;
	}
	public Double getTaxaJuros() {
		return taxaJuros;
	}
	public void setTaxaJuros(Double taxaJuros) {
		this.taxaJuros = taxaJuros;
	}
	
	//Sacar dinheiro: o cliente pode sacar dinheiro desde que não supere seu saldo.
	@Override
	public void sacar(double valor) {
		
		double limite = getSaldo() - valor;
		
		if(limite >= 0) {
			super.sacar(valor);
		}else {
			System.out.println("Valor superou seu saldo disponível!");
		}
	}
	
	public void recolherJuros() {
		double valor = getSaldo() * this.taxaJuros;
		super.depositar(valor);
	}
	@Override
	public String toString() {
		return "ContaPoupanca [taxaJuros=" + taxaJuros + ", getSaldo()=" + getSaldo() + "]";
	}
	
}