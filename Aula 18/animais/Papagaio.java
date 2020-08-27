package animais;

public class Papagaio extends Passaro{
	public Papagaio() {
		super();
	}

	public Papagaio(String nome) {
		super(nome);
	}

	@Override
	public void falar() {
		system.out.println("Repetindo...");
	}
