package notas;

import java.util.Scanner;

public class Principal {

	public static void main(String[] args) { 
	
Scanner sc = new Scanner(System.in);
		
		Notas novo = new Notas();
		
				
		System.out.print("Nome do aluno: ");
		novo.aluno = sc.nextLine();
		
		System.out.print("Nota 1º trimestre: ");
		novo.prim = sc.nextDouble();
		
		System.out.print("Nota 2º trimestre: ");
		novo.seg = sc.nextDouble();
		
		System.out.print("Nota 3º trimestre: ");
		novo.ter = sc.nextDouble();
		
		System.out.println(novo.aluno + " MÉDIA FINAL =  " + novo.media());
		System.out.println(novo.status());
	
		sc.close();
	}
}
