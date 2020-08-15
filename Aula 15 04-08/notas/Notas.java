package notas;

public class Notas {
	
	
		public String aluno;
		public double prim;
		public double seg;
		public double ter;
		
		public double media() {
			return (prim*0.3 + seg*0.3 + ter*0.35);
		}
		
		public String status() {
			if(media() >= 60) {
				return "APROVADO!";
			} else {
				return "REPROVADO \nPONTOS QUE FALTARAM: " + (60 - media());
			}
		}
	}
	
	


