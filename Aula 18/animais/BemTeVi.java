package animais;

//classe asbstract não pode ser instanciada por que é abstrato
public class BemTeVi extends Passaro{
	public BemTeVi() {
		super();
	}

	public BemTeVi(String nome) {
		super(nome);
	}

	@Override
	public void falar() {
		system.out.println("Cantar...");
	}
