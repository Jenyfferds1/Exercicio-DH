package animais;

//classe asbstract não pode ser instanciada por que é abstrato
public class Passaro extends Passaro{
	public Passaro() {
		super();
	}

	public Passaro(String nome) {
		super(nome);
	}

	@Override
	public void falar() {
		system.out.println("Piando...");
	}
