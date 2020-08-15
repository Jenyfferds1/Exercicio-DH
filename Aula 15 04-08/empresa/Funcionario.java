package empresa;

public class Funcionario {

public String nome;
public double salarioBruto;
public double taxa;


public double salarioLiquido() {
	return salarioBruto - taxa;
}

public void aumentoSalarial(double porcentagem) {
	salarioBruto = salarioBruto *(porcentagem/100)+(salarioBruto - taxa);
}
}
