package conta;
public class contaCorrente extends Conta{
	private Double limiteChequeEspecial;
	public contaCorrente() {
		super();
	}
	public contaCorrente(Double limiteChequeEspecial) {
		super();
		this.limiteChequeEspecial = limiteChequeEspecial;
	}
	
	public Double getLimiteChequeEspecial() {
		return limiteChequeEspecial;
	}
	
	public void setLimiteChequeEspecial(Double limiteChequeEspecial) {
		this.limiteChequeEspecial = limiteChequeEspecial;
	}
	
	//Sacar dinheiro: o cliente pode sacar dinheiro e, caso não tenha saldo
	//suficiente, usar seu cheque especial.
	//Cheque Especial - R$ 200,00
	//R$ 100 - R$ 120,00
	//R$ 100 - R$ 80,00
	//R$ 100 - R$ 320,00
	@Override
	public void sacar(double valor) {
		double limite = getSaldo() - valor;
		
		if((limite + limiteChequeEspecial) >= 0) {
			super.sacar(valor);
			if(limite < 0) {
				limiteChequeEspecial = limiteChequeEspecial - limite;
			}			
		}else {
			System.out.println("Valor superou seu saldo disponível!");
		}
	}
	
	//Depositar cheques: o cliente pode depositar cheques. Um cheque tem
	//um valor, um banco emissor e uma data de pagamento.
	public void depositarCheques(Cheque cheque) {
		depositar(cheque.getValor());
	}
}