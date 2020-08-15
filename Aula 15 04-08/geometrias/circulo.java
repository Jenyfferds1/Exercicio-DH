package geometrias;

public class circulo {
  
  public static final double PI = 3.1415;

//public:acessar ela de outra clasee
//static: posso acessar sem precisar criar um obj, basta colocar o nome da classe.nome do atributo
//final: uma constante, não posso alterar o valor declarado
//double:numero real
	
	public static double circunferencia(double raio) {
		return 2.0 * PI* raio;
	}
	
	public static double volume(double raio) {
		return 4.0 * PI * Math.pow(raio,  3.0) / 3.0;
	}
}


/*	public static double circunferencia(double raio) {
		return 2.0 * Math.PI* raio;
	}
	
	public static double volume(double raio) {
		return 4.0 * Math.PI * Math.pow(raio,  3.0) / 3.0;
	}
}
*/