import java.util.*;

public class stdio {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // read nubmer
        int a = scan.nextInt();

        // rede string
        String str = scan.next();

        scan.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        scan.close();

        System.out.println(a);
        System.out.println(str);
    }
}