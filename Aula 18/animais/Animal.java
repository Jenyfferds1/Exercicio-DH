package animais;

public class BenTeVi extends Passaros {
	public BenTeVi() {
		super();
	}
	
public String getNome(){
	return nome;
}



	public void setNome(String nome) {
		this.nome(nome);
	}
	@Override
	public void falar() {
		System.out.println("Piando...");
	}
}