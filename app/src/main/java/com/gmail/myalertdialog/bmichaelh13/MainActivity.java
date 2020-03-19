package com.gmail.myalertdialog.bmichaelh13;

import androidx.appcompat.app.AppCompatActivity;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import static com.gmail.myalertdialog.bmichaelh13.R.*;
import static com.gmail.myalertdialog.bmichaelh13.R.id.*;

public class MainActivity extends AppCompatActivity {


    private AlertDialog.Builder alertDialog;
    private Button showDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(layout.activity_main);

        showDialog = (Button) findViewById(showDialogId);
        showDialog.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            //show the actual dialog (alert dialog)
                alertDialog = new AlertDialog.Builder(MainActivity.this);

                //set things up - set title
                //alertDialog.setTitle(R.string.title);
                alertDialog.setTitle(getResources().getString(string.title));
                alertDialog.setIcon(android.R.drawable.ic_dialog_alert);
                alertDialog.setIcon(android.R.drawable.ic_menu_delete);

                //set message
                alertDialog.setMessage(getResources().getString(string.message));

                //set cancelable
                alertDialog.setCancelable(false);

                //set positive button
                alertDialog.setPositiveButton(getResources().getString(string.yes), new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        //exit the window activity
                        MainActivity.this.finish();


                    }
                });

                //set negative button
                alertDialog.setNegativeButton(getResources().getString(string.no), new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.cancel();
                    }
                });

                //create the dialog
                AlertDialog dialog = alertDialog.create();

                //show the dialog
                dialog.show();


            }
        });

    }
}
