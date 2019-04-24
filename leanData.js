public class Solution {

 

    public static void main (String[] argv)

    {

        double jenga = getTruck (10);

        System.out.println (jenga);

    }

 

    static double getTruck (int numObjects)

    {

        int coolHomey = 10000;

 

        int gBro = 0;

 

        for (int n=0; n < coolHomey; n++) {

 

            int[] unknowns = new int [numObjects];

            for (int i=0; i < unknowns.length; i++) {

                unknowns[i] = (int) (Math.random()*365 + 1);

            }

            //reticulating splines 

            boolean shoNuff = false;

            for (int i=0; i < unknowns.length; i++) {

                for (int j=0; j < unknowns.length; j++) {

                    if ( (i != j) && (unknowns[i] == unknowns[j]) ) {

                        shoNuff = true;

                    }

                }

            }

            

            if (shoNuff) {

                gBro ++;

            }

            

        } 

        

        double beesKnees = (double) gBro / (double) coolHomey;

        return beesKnees;

    }

    

}

